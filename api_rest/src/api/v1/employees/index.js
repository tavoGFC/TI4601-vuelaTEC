import Employees from '../../../models/employee';
import Passengers from '../../../models/passenger';
import Tickets from '../../../models/tickets';

function EmployeesRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/employee/test',
      handler: async (request, reply) => {
        return '<h1> employees working! </h1>';
      }
    },

    //-------------------------------------------------//
    //---------------------Reports---------------------//
    //-------------------------------------------------//

    // 1. -- verify check-in -- //

    // 2. -- passengers info: all and by id --//
    {
      method: 'GET',
      path: '/employee/passengerInfo/',
      handler: async (request, reply) => {
        try {
          const person = await Passengers.aggregate([
            {
              $lookup: {
                from: 'tickets',
                localField: '_id',
                foreignField: 'passenger_id',
                as: 'ticketsInfo'
              }
            }
          ]);
          return reply.response(person);
        } catch (error) {
          return reply.response(error).code(500);
        }
      }
    },

    {
      method: 'GET',
      path: '/employee/passengerInfo/{id}',
      handler: async (request, reply) => {
        try {
          const personId = parseInt(request.params.id);
          const person = await Passengers.aggregate([
            {
              $match: {
                _id: personId
              }
            },
            {
              $lookup: {
                from: 'tickets',
                localField: '_id',
                foreignField: 'passenger_id',
                as: 'ticketsInfo'
              }
            }
          ]);
          return reply.response(person);
        } catch (error) {
          return reply.response(error).code(500);
        }
      }
    },

    // 3. -- boarding pass -- //
    {
      method: 'PUT',
      path: '/employee/boardingPass/',
      handler: async (request, reply) => {
        try {
          const { _id, passenger_id } = request.payload;
          const boarded = await Tickets.update(
            {
              _id: _id,
              passenger_id: passenger_id
            },
            {
              $set: {
                boarded: true
              }
            }
          );
          return reply.response(boarded);
        } catch (error) {
          return reply.response(error).code(500);
        }
      }
    },

    // 4.2 -- flights info: all and by id -- //
    {
      method: 'GET',
      path: '/employee/findAllFlights/',
      handler: async (request, reply) => {
        try {
          const flights = await Flights.find();
          return reply.response(flights);
        } catch (error) {
          return reply.response(error).code(500);
        }
      }
    },
    {
      method: 'GET',
      path: '/employee/findFlightsId/{id}',
      handler: async (request, reply) => {
        try {
          const flightsId = request.params.id;
          const flights = await Flights.findById(flightsId);
          return reply.response(flights);
        } catch (error) {
          return reply.response(error).code(500);
        }
      }
    }
  ]);
}

export default EmployeesRoutes;
