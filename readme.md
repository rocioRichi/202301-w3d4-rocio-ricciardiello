- Week 4 - Challenge 3
  Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

    Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
    Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
    No se puede introducir un número de más de 9 cifras.
    El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
    El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
    Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
    Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
    Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

Separa todo en componentes:

Entrega también un listado de responsabilidades.

    Info: Show Calling message.Get info from contex.
    Display: Show phone number.Get info from contex.
    Actions: Show available actions.
        Action:onClick to interactuate with the user.Send info to context.
    Keyboard: Show availables keys
        Key:onClick to interactuate with the user. Send info to context.
