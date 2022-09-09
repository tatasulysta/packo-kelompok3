import React from 'react';

const TimeInformation = ({ open, close }) => {
  return (
    <p style={{ color: 'var(--brand-yellow)' }} className="text-sm text-weight-medium">
      Open <time dateTime={open}>{open}</time> - <time dateTime={close}>{close}</time>
    </p>
  );
};

export default TimeInformation;
