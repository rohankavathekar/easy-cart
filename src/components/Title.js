import React from 'react';

const Title = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto mtb-20 text-center text-title">
  <h1 className="font-weight-bold">{props.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;