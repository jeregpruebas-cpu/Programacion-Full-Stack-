# Estándares de documentación de issues

Las modificaciones quedan sujetas a criterios de ingeniería; el presente documento constituye una base de referencia.

## Lineamientos generales

- **Títulos:** deben ser concretos y concisos, describiendo únicamente la acción requerida.  
- **Problema:** especificar claramente qué se debe resolver.  
- **Descripción:** incluir un desglose detallado y los parámetros del problema.  
- **Entregable:** definir qué evidencia confirma la resolución del issue (por ejemplo, una sección de página actualizada).

## Plantilla

```
+ ------------------------------------ +
|                                      |
|             Título     (H1)          |
|   Problema: ......     (H2)          |
|                        (cont. en H3) |
|   Descripción: ...                   |
|                                      |
|   Entregable: ....                   |
|                                      |  
+ ------------------------------------ +
```

# Ejemplo aplicado:


># Ingreso al sistema para empleados
>
>## Problema
>Se requiere implementar un sistema de ingreso para empleados que permita >ingresar al sistema mediante cedula de identidad y contraseña.
>
>## Descripción
>El sistema debe contar con un formulario de inicio de sesión en la pagina Home >que incluya los siguientes campos y validaciones:
>
>- **Documento de identidad:**
>  - Solo debe permitir dígitos (0-9).
>  - No se permiten puntos ni guiones.
>  - En dispositivos táctiles (celulares, tablets, etc.) debe desplegar un >teclado numérico.
>
>- **Contraseña:**
>  - Los caracteres ingresados deben mostrarse de forma censurada.
>
>- **Acción de ingreso:**
>  - Debe existir un botón para ingresar al sistema.
>  - Al presionarlo, se validarán los datos ingresados.
>  - En caso de ser correctos, se permitirá el acceso al sistema.
>
>## Solución propuesta
>La solución consiste en desarrollar un formulario de inicio de sesión que >incluya los campos de documento y contraseña con sus respectivas validaciones, >junto a un botón de ingreso.
>
>El formulario debe guiar al usuario mediante etiquetas (o labels) visibles y >placeholders, asegurando una comprensión adecuada y una experiencia de uso mas >intuitiva.
>
>## Entregable
>Formulario funcional implementado en el archivo x.html

# Bloque de codigo

```
# Ingreso al sistema para empleados

# Problema
Se requiere implementar un sistema de ingreso para empleados que permita ingresar al sistema mediante cedula de identidad y contraseña.

## Descripción
El sistema debe contar con un formulario de inicio de sesión en la pagina Home que incluya los siguientes campos y validaciones:

- **Documento de identidad:**
  - Solo debe permitir dígitos (0-9).
  - No se permiten puntos ni guiones.
  - En dispositivos táctiles (celulares, tablets, etc.) debe desplegar un teclado numérico.

- **Contraseña:**
  - Los caracteres ingresados deben mostrarse de forma censurada.

- **Acción de ingreso:**
  - Debe existir un botón para ingresar al sistema.
  - Al presionarlo, se validarán los datos ingresados.
  - En caso de ser correctos, se permitirá el acceso al sistema.

## Solución propuesta
La solución consiste en desarrollar un formulario de inicio de sesión que incluya los campos de documento y contraseña con sus respectivas validaciones, junto a un botón de ingreso.

El formulario debe guiar al usuario mediante etiquetas (o labels) visibles y placeholders, asegurando una comprensión adecuada y una experiencia de uso mas intuitiva.

## Entregable
Formulario funcional implementado en el archivo x.html
```