import './Modal.css'
import PropTypes from 'prop-types';

export const Modal = ({ open, close, repository }) => {
  if (!open) return null;

  return (
    <div className="modal-content">
      <div className='modal'>
        <div>
          <button className='button' onClick={close}>Cerrar</button>
          <h2>Detalles del Repositorio</h2>
        </div>
        <ul>
          <li> Nombre: {repository.nombre} </li>
          <li> Autor: {repository.autor} </li>
          <li> Estrellas: {repository.estrellas} </li>
          <li> Fecha de creación: {repository.fecha} </li>
          <li> Descripcion: {repository.descripcion} </li>
        </ul>
        <img src={repository.foto} alt={repository.nombre}  />
        <div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  repository: PropTypes.object,
};