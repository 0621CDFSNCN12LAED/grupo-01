
import React from 'react';
import './Home.css';

function BranchList() {

  let categorias = ["Remeras", "Pantalon", "Abrigo", "Calzado", "Moda Intima", "Accesorios"]
  
  return (
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
                Categorias con las que trabajamos
            </h5>
            </div>
            <div className="car-bdody">
                <div className="row">
                {categorias.map((categoria, i) =>
                    <div className="col-lg-6 mb-4" key={i}>
                        <div className="card bg-dark text-white shadow" key={i}>
                            <div className="card-body" key={i}>{categoria}</div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default BranchList;