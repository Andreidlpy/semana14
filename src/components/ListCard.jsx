import { Card } from "./Card";


export const ListCard = ({ dogs}) => {
  // Filtrar la lista de perros basada en el valor proporcionado

  return (
    <>
      {
        dogs.length > 0 ? (
          <section className="Cards">
            <div className="Cards-Grid">
              {dogs.map(dog => <Card key={dog.id} {...dog} />)}
            </div>
          </section>
        ) : (
          <h2 className="text-center">No se encontraron perros</h2>
        )
      }
    </>
  );
}
