import React from 'react';

const TableHeader = () => {
  return (
    // ========= TABLE HEADER START =========
    <div className="table__row table__row-header">
      <span className="col col__1">#</span>
      <span className="col col__2">Name</span>
      <span className="col col__3">Price</span>
      <span className="col col__4">Market Cap</span>
      <span className="col col__5">Market Cap</span>
      <span className="col col__6">24hr</span>
      <span className="col col__7">7d</span>
    </div>
    // ========= TABLE HEADER END =========
  );
};

export default TableHeader;
