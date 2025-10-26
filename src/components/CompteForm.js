import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm() {
  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompte({ ...compte, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/comptes`, compte)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="solde" className="form-label">Solde</label>
          <input type="text" name="solde" className="form-control" placeholder="Solde" value={compte.solde} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dateCreation" className="form-label">Date de Création</label>
          <input type="date" name="dateCreation" className="form-control" placeholder="Date de Création" value={compte.dateCreation} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select name="type" className="form-select" value={compte.type} onChange={handleChange}>
            <option value="">Sélectionner le type</option>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;
