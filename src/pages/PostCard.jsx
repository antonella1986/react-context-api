import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function PostCard() {
  //product è la variabile che conterrà info del prodotto
  //setProduct cambia il valore di product
  //all'inizio il valore di product è null (nessun prodotto caricato inizialmente)
  const [post, setpost] = useState(null)
  //con l'hook useParams ottengo l'id del prodotto dalla barra degli indirizzi
  const { id } = useParams()
  console.log(id);

  //questa funzione mi permette di navigare tra le pagine del sito senza ricaricarlo
  //lo userò per creare un pulsante per andare alla pagina precedente
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
      .then(res => res.json())
      //una volta ottenuti i dati, viene eseguita questa funzione
      .then(data => {
        //aggiorno la variabile post con i dati ottenuti del prodotto 
        setpost(data)
      })
      .catch(err => {
        console.log('ERROR', err);
      })

  }, [])

  return (
    <>

      <main>

        {
          !post ? ('Loading ...')
            : (
              <>
               {/* creo una sezione con lo sfondo dell'immagine del prodotto */}
                <div style={{ minHeight: '50vh', backgroundImage: `url(${post.image})` }}></div>

                <section id="post_details" className="mt-5">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-12 col-md-5">
                        <img className="img-fluid" src={post.image} alt={post.title} />
                      </div>
                      <div className="col-12 col-md-7">
                        {/* creo un pulsante per andare alla pagina precedente */}
                        <button className="back" onClick={() => navigate(-1)}>
                          <i className="bi bi-arrow-left"></i>
                        </button>
                        <button className="next" onClick={() => navigate(+1)}>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                        <h1>post: {post.title}</h1>
                        <p>{post.description}</p>
                        <div className="price fw-bold fs-2">${post.price}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
        }

      </main>

    </>
  )
}