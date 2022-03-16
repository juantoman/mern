import React from 'react';
import Button from 'react-bootstrap/Button'

function Prova() {
  return (
    <div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <label for="customRange1" class="form-label">Example range</label>
    <input type="range" class="form-range" id="customRange1"/>
    </div>
  )
}

export default Prova
