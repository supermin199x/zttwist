import React from 'react';
import "../Components/Search.css";

const Search = () => {
    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <div className={'search'}>
            <div className={'search-layout'}>
                <p className={'group-datestart'}>
                    <label>DateStart</label>
                    <input type={'date'} />
                </p>
                <p className='group-dateend'>
                    <label>DateEnd</label>
                    <input type={'date'} />
                </p>
                <p className={'group-machine'}>
                    <label>Machine ID</label>
                    <select name='' id=''>
                        <option value={''}>0</option>
                        <option value={''}>1</option>
                        <option value={''}>2</option>
                        <option value={''}>3</option>
                        <option value={''}>4</option>
                        <option value={''}>5</option>
                    </select>
                </p>
                <p className={'group-sensor'}>
                    <label>Sensor ID</label>
                    <select name='' id=''>
                        <option value={''}>0</option>
                        <option value={''}>1</option>
                        <option value={''}>2</option>
                        <option value={''}>3</option>
                        <option value={''}>4</option>
                        <option value={''}>5</option>          
                    </select>
                </p>
                <p className={'group-machine'}>
                    <label>Status</label>
                    <select name='' id=''>
                        <option value={''}>0</option>
                        <option value={''}>1</option>
                        <option value={''}>2</option>
                        <option value={''}>3</option>
                        <option value={''}>4</option>
                        <option value={''}>5</option>
                    </select>
                </p>
                <p className={'btn-reset'}>
                    <button onClick={refreshPage} type={'reset'}>Reset</button>
                </p>
                <p className={'btn-search'}>
                    <button type={'reset'}>Search</button>
                </p>
            </div>
        </div>
    )
}

export default Search;