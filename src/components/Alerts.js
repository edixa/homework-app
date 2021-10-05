
const MostarAlert = ({tamaño, ancho, Fondo, textoColor, texto}) =>{
    return(
        <div>
           
            <div style={{
                height: tamaño,
                width: ancho,
                background: Fondo,
                color: textoColor
            }
            }>
                {texto}
            </div>
                <br/>
            <div>

            </div>

        </div>
    )
}

export {
    MostarAlert
}