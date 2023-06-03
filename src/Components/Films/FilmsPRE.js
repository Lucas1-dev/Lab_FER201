import React from 'react'
import { Films } from '../../shared/ListOfFilms';


export default function FilmsPRE({ films }) {
    console.log(films);
    return (
        <div>
            <div className="p-3 mb-2 bg-dark text-white">
                <div className="row d-inline-flex">

                    {Films.map((film) => (
                        <div className="col-12 col-sm-6 col-md-4 p-2 ">
                            <div className="  text-center height100" key={film.id}>
                                <div className="card">
                                <div className="image-container">
                                    <img className="rounded img-thumbnail center-image" src={film.img} alt="" style={{ height:'auto', width:'auto'}} />
                                </div>
                                <h3>{film.title}</h3>
                                <p className='title'>{film.year}</p>
                                <p className='title'>{film.nation}</p>
                                <p className='title'>{film.club}</p>
                                <button className="btn btn-block btn-danger border center-button">Detail</button>
                            </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    )
}
