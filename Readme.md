## Todo App

### Info tecnica del proyecto

1. app creada con Vitejs en vanilla js version.
2. nodejs version
3. uuid version 4
4.

### Info del proyecto

### Proceso

1. creacion del proyecto con npm create vite@latest
   1. seleccion de vanilla js
2. crear estructura de directorios en folder src
3. crear funcion autoinvocada para cargar el template de html (`import htmlApp from "./app.html?raw"`) e inyectarlo en el id.app para renderizar el documento, llamar dicha funcion desde el main.js
4. crear el modelo - class de la entidad, es decir la tarea y agregar sus propiedades
5. crear el store, metodos y tipos de filtrado
   1. funcion getTodos con un switch para filtrar los todos segun el parametro que le pasemos
   2. funcion addTodo hacemos una validacion para que no venga vacio el input e insertamos en el array declarado en el state el nuevo todo
   3. funcion toggleTodo para cambiar el estado de un todo
   4. funcion deleteTodo, por medio de un filter hacemos match con el todo seleccionado y la lista de todos guardada, devolvemos todo el array excepto el todo seleccionado
   5. funcion deleteComplete borramos todos los todos que cumplan con el filtro seleccionado
   6. exportamos todas las funciones del store para poderlas usar desde los otros modulos del proyecto
6. se crear archivo barril donde se exportara las funciones de renderTodos y createElementHTML
7. crear funcion para crear el elemento html y renderizar 1 todo con las clases y atributos necesarios, se hace una validacion por si el input viene vacio
8. crear funcion para renderizar los todos (renderTodos), se pasa el todo como parametro y se verifica si elemento ya esta creado o no
9. Creamos la funcion displayTodos para insertar los todos en el html, usamos la funcion getTodos de la store y usamos el filter getCurrentFilter que por defecto esta en 'All', displayTodos es llamado en la func. de inicializacion que es insertada en el root app del html
10. creamos una referencia del input para capturar el evento por medio de un eventListener, usamos validaciones para campos vacios y cuando se presione el codeKey=13 (enter), llamamos a la funcion addTodo pasando como parametro el valor del evento. Luego volvemos a llamar a displayTodo para mostrar el nuevo array de elementos y limpiamos el input
