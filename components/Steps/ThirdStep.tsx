import React, { useState, useEffect } from 'react';
export default function ThirdStep(props:any) {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        try {
            const { user } = props;
            console.log(user);
        } catch (error) {
      
        }
    }
    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="form-label">Country</div>
                <select
                    name="country"
                    value={selectedCountry}
                    onChange={(event:any) => setSelectedCountry(event.target.value)}
                >
                    <option value="1">India</option>
                </select>
            </div>
            <div className="form-group">
                <div className="form-label">State</div>
                <select className="form-control"
                    name="state"
                    value={selectedState}
                    onChange={(event:any) => setSelectedState(event.target.value)}
                >
                    <option value="1">Punjab</option>
                </select>
            </div>
            <div className="form-group">
                <div className="form-label">City</div>
                    <select className="form-control"
                        name="city"
                        value={selectedCity}
                        onChange={(event:any) => setSelectedCity(event.target.value)}
                    >
                        <option value="1">sdffs</option>
                    </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};