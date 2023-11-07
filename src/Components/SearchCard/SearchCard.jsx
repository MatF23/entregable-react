import { useState } from 'react';
import { InputSearch } from './../InputSearch/InputSearch';
import { ButtonSearch } from './../ButtonSearch/ButtonSearch';
import { Modal } from './../Modal';
import PropTypes from 'prop-types';
import './../SearchCard/SearchCard.css';
import './SearchCard.css'
import SwitchButton from '../SwicthButton';

const  SearchCard = ({ searchValue, setSearchValue, fetchData, repos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [repoprofile, setRepoProfile] = useState("repositorios")
  
  const HandleToggle = (toggled)=> {
    if (toggled) {
      setRepoProfile("perfiles");
    } else {
      setRepoProfile("repositorios");
    }
  }
  
    const openModal = async (repo) => {
      if (!modalIsOpen) {
        try {
          const response = await fetch(repo.url);
          const userData = await response.json();

          const modalData = {
            id: repo.id,
            nombre: repo.name,
            autor: repo.owner.login,
            estrellas: repo.stargazers_count,
            foto: userData.owner.avatar_url,
            fecha: repo.created_at,
            descripcion: repo.description
          };
          setModalData(modalData);
          setModalIsOpen(true);
        } catch (error) {
          console.log('Error al traer data', error);
        }
      }
    };

    const closeModal = () => {
      setModalIsOpen(false);
    };

  return (
    <>
      <div>
        <div>
        <h1 className="inputsearch">Buscar {repoprofile} <SwitchButton onToggle={HandleToggle}/></h1>
        </div>
        <form>
          <div className="inputsearch">
            <InputSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="inputsearch">
            <ButtonSearch buttonText="Buscar" onClick={fetchData} />
          </div>
          <div className='result'>
            <ul className="repo-list">
              {repos.map((repo) => (
                <li key={repo.id} className="repo-item">
                  <span className="symbol">•</span> Nombre del repositorio: {repo.name}
                  <br />
                  <span className="symbol">•</span> Autor: {repo.owner.login}
                  <div className="inputsearch">
                    <ButtonSearch buttonText="Detalles" onClick={() => openModal(repo)} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {modalIsOpen && (
            <Modal open={modalIsOpen} close={closeModal} repository={modalData} />
          )}
        </form>
      </div>
    </>
  );
};

export default SearchCard;

SearchCard.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  repos: PropTypes.array,
  fetchData: PropTypes.func,
}; 