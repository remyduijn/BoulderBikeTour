import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import '../styles/Riders.css';
import styled from 'styled-components';

const H1 = styled.div`
    font-size: 1.5rem;
    color: #ffab00; 
    margin-top: 2.5rem;
    margin-left: 7.5rem;

    @media screen and (max-width: 1330px) {
        margin-left: 4rem;
    }
    @media screen and (max-width: 1200px) {
        margin-left: 1rem;
    }
`;

const H3 = styled.h3`
    font-size: 1.2rem;
    margin-left: 7.5rem;

    @media screen and (max-width: 1330px) {
        margin-left: 4rem;
    }
    @media screen and (max-width: 1200px) {
        margin-left: 1rem;
    }
`;

const data = [
{ name: "Maria", last_name: "Baisden", city: "Raleigh, NC" },
{ name: "Joan", last_name: "Brooks", city: "Norfolk, VA" },
{ name: "Travis", last_name: "Cook", city: "Twin Lakes, WI" },
{ name: "Katie", last_name: "Dunlap", city: "Marion, VA"},
{ name: "Lawrence", last_name: "Duran", city: "Fort Myers, FL" },
{ name: "Jason", last_name: "Finn", city: "Huntington Beach, CA" },
{ name: "Nancy", last_name: "Garner", city: "Baltimore, MD" },
{ name: "Dustin", last_name: "Green", city: "Hickory Hills, IL" },
{ name: "Matthew", last_name: "Gregson", city: "Brashear, MO" },
{ name: "Leo", last_name: "Howard", city: "Dallas, TX"},
{ name: "Maggie", last_name: "Lantz", city: "Dublin, OH" },
{ name: "Irene", last_name: "Molina", city: "Tucson, AZ"},
{ name: "Jason", last_name: "Nichols", city: "Alexandria, VA"},
{ name: "Tricia", last_name: "Renshaw", city: "Mystic, CT" },
{ name: "Joseph", last_name: "Rodgers", city: "Wayne, NJ" },
{ name: "Alejandro", last_name: "Smith", city: "Scarborough, ME"},
{ name: "Melinda", last_name: "Stephenson", city: "Kahului, HI"},
{ name: "Tara", last_name: "Taylor", city: "Minneapolis, MN" },
{ name: "Howard", last_name: "Thompson", city: "Hale, MO"},
{ name: "Sandy", last_name: "Townsend", city: "Newport, PA" }
]

function RidersPage() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
            <H1>Riders</H1>
            <H3>Saturday April 1, 2023</H3>
            <div className="riders">
            <table>
                <tr>
                <th>First name</th>
                <th className='space'></th>
                <th>Last name</th>
                <th className='space'></th>
                <th>City of origin</th>
                </tr>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.name}</td>
                    <td></td>
                    <td>{val.last_name}</td>
                    <td></td>
                    <td>{val.city}</td>
                    </tr>
                )
                })}
            </table>
            </div>
        <Footer2 />
        <Footer />
    </div>
  );
}

export default RidersPage;
