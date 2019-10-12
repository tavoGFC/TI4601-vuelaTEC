import Employee from '../../../models/employee';

function AdministratorRoute(server) {
  server.route([
    {
      method: 'GET',
      path: '/administrator/test',
      handler: async (request, reply) => {
        return '<h1> employees working! </h1>';
      }
    },
    {
      method: 'GET',
      path: '/administrator/findAll',
      handler: async (request, reply) => {
        try {
          const person = await Employee.find();
          return reply.response(person);
        } catch (error) {
          return reply.response(error).code(500);
        }
      }
    }

    /* 
    
    1. Para todas las aerolíneas debe mostrar todos los vuelos 
    junto con la cantidad de boletos vendidos en cada uno 
    y el monto total correspondiente a los boletos vendidos. 

    2. Rango de boletos comprados por cada pasajero.
    El rango va del menor al mayor número de boletos adquiridos por un pasajero.
    Por ejemplo, si Ana ha comprado boletos para 5 vuelos, y se identifica que en 
    el vuelo que menos boletos compró, adquirió uno y en el que más boletos compró, 
    adquirió tres, entonces su rango será [1,3]

    3. ¿Cuáles son las destinos más visitados? Se debe mostrar el nombre de
    cada destino y la cantidad de pasajero que han comprado vuelos
    para ese destino.

    4. Cantidad de operaciones de compra de boletos registradas en el sistema, 
    esta información se puede filtrar por pasajero, por rango de fechas, 
    por estado de vuelo. También mostrar los tres pasajeros
    con más vuelos adquiridos. 
    
    */
  ]);
}

export default AdministratorRoute;