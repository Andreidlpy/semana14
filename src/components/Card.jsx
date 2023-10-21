import { Country } from "./icons/Country"
import { Phone } from "./icons/Phone"


export const Card = ({name, img, telefono, pais , descripcion}) => {
  return (
    <div className="Card">
        <img src={ img } alt={name} />
        <div className="Card-Body">
            <h3 className="Card-Title">{ name }</h3>
            <p className="Card-Description">{ descripcion }</p>
            <div className="Card-Info">
                <p className="Card-Phone ">
                    <Phone /> { telefono } 
                </p>
                <p className="Card-Country ">
                    <Country /> { pais }
                </p>
            </div>
        </div>
    </div>
  )
}
