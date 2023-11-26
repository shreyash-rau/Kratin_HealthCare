import React from 'react';

import Meal from '../../Home_Component/Meal';
import Medicine from '../../Home_Component/Medicine';
import Walking from '../../Home_Component/Walking';


import "../../Home_Component/HomeComp.scss";
import Add_Task from '../../Home_Component/Add_Task';

function Home() {

  return (
    <>
      <Meal />
      <Medicine />
      <Walking />
      <hr /><hr />
      <Add_Task />

    </>
  )
}

export default Home;