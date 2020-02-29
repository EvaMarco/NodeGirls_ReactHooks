# Taller de React con Hooks de las NodeGirlsMadrid

## Detalles
Los React.Fragment se pueden poner como <> y </>
Cuando modificamos el estado se vuelve a Renderizar.

## Cambiar el estado con los hooks

Son funciones especficos para los componentes funcionales.
- useState:
  Para usarlo hay que importarlo.
  Declaramos una variable 
  ``` const [count, setCount] = useState(0);```

  Count es la variable  que vamos a cambiar,
  y setCount es la función que vamos a usar para cambiar la variable. 
  useState(0) nos indica el valor inicial del valor. 

  Para obtener el resultado usaremos {count}
  Si queremos mutar el estado setCount(count +1)

- useEffect:
  Añade efectos secundarios. Una función que no devuelve nada pero que cambia algo fuera de su scope. Está pendiende de los cambios que se producen a su alrededor y actua en consecuencia. Ten cuidado que se pueden producir bucles infinitos porque al cambiar el estado se renderiza el componente y se vuelve a llamar a este hook. 
  Admite dos variables, una función y una array de dependecias. En esta Array es donde pondremos las variables que queremos usar como claves. Si este array muta se ejecuta el useEffect, si no cambia no se vuelve a llamar. 
  Si pasamos un array vacio esta función solo se ejecuta una vez.

## Gestionar tipos de componentes

### Dumb Components

Se encargan solo de pintar las cosas en el DOM

### Container components

Aquí establecemos la lógica y funcionalidad. Estas funciones se las pasaremos a los componentes tontos.

Con esta división separaremos la lógica y haremos los componentes muy reutilizables. 

## Otra info

En un componente funcional podemos abreviar las props haciendo esto.
``` 
const Home = ({step}) => {
  return (
    <Header>Soy {step}</Header>
  )
}
```

Que sería equivalente a:

```
const Home = (props) => {
  const step = this.props.step;
  return (
    <Header>Soy {step}</Header>
  )
}
``