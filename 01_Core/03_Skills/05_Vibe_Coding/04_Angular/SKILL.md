---
name: angular
description: > Triggers on: 04_Angular, patterns, coding.
  Angular modern patterns - standalone components, signals, architecture, forms.
  Trigger: When working with Angular projects - structure, components, signals.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Standalone Components (Default in Angular 15+)

```typescript
// ✅ SIEMPRE: Componente standalone
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  users = signal<User[]>([]);
  isLoading = signal(false);
}

// ❌ NUNCA: Componente con module
@Component({
  selector: 'app-user-list',
  moduleId: module.id,
  // NO USAR - deprecated
})
```

## Signals (Reactive State)

```typescript
// ✅ DECLARAR signals para estado reactivo
@Component({...})
export class UserListComponent {
  // Signal writable
  users = signal<User[]>([]);
  
  // Computed signal
  activeUsers = computed(() => 
    this.users().filter(u => u.active)
  );
  
  // Effect (side effects)
  effect(() => {
    console.log('Users changed:', this.users());
  });
}

// ✅ USAR signal() en lugar de BehaviorSubject
// ✅ USAR computed() para estado derivado
// ✅ USAR effect() para side effects (evitar en lo posible)
```

## Dependency Injection

```typescript
// ✅ INYECTAR con inject() (preferido)
export class UserService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}

// ❌ EVITAR constructor injection para servicios simples
// @Injectable({ providedIn: 'root' })
// export class UserService {
//   constructor(private http: HttpClient) {} // NO
// }
```

## Control Flow (@if, @for, @switch)

```typescript
// ✅ USAR nuevo control flow syntax
@Component({
  template: `
    @if (isLoading()) {
      <app-loader />
    } @else {
      @for (user of users(); track user.id) {
        <app-user-card [user]="user" />
      } @empty {
        <p>No users found</p>
      }
    }
    
    @switch (user.role) {
      @case ('admin') { <app-admin-panel /> }
      @case ('user') { <app-user-view /> }
      @default { <app-guest-view /> }
    }
  `
})
export class UserComponent {
  isLoading = signal(true);
  users = signal<User[]>([]);
}
```

## HTTP Client

```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
  
  post<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(url, body);
  }
}
```

## Forms (Reactive Forms)

```typescript
@Component({...})
export class UserFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.min(18), Validators.max(150)]],
  });
  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

## Router

```typescript
// Routes con funciones
export const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [authGuard],
    children: [
      { path: ':id', component: UserDetailComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

// Navigation con signal
@Component({...})
export class NavComponent {
  private router = inject(Router);
  
  navigate(path: string) {
    this.router.navigate([path]);
  }
}
```

## Keywords

angular, ng, standalone, signals, dependency-injection, reactive-forms, rxjs

## Esencia Original

> **Propósito:** Framework SPA de Google con TypeScript
> **Flujo:** Components → Services → Routes → Forms

## ⚠️ Gotchas (Errores Comunes a Evitar)

- **[ERROR]**: `ExpressionChangedAfterItHasBeenCheckedError`
  - **Por qué**: Se modifica el estado durante la detección de cambios
  - **Solución**: Usar `setTimeout` o `changeDetectorRef.detectChanges()`

- **[ERROR]**: Memory leaks con subscriptions
  - **Por qué**: No se completa el unsubscribe en ngOnDestroy
  - **Solución**: Usar `takeUntilDestroyed()` o `async` pipe en templates

- **[ERROR]**: Change detection lento
  - **Por qué**: Too many bindings en OnPush componentes
  - **Solución**: Usar signals, usar `trackBy` en @for, optimizar bindings

## 💾 State Persistence

Guardar en:
- `03_Knowledge/` — Documentación
- `04_Operations/` — Estado activo