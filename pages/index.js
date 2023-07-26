// pages/index.js
function HomePage() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is my homepage content.</p>

      {/* User Information */}
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> ABDUL REHMAN KHAN<br />
        <strong>Father Name:</strong> MUHAMMAD NAZEER<br />
        <strong>CNIC:</strong> 42501-9651061-7<br />
        <strong>City:</strong> KARACHI<br />
        <strong>Address:</strong> PHAN QAIDABAD BILMUKABIL SSP OFFICE NUMBER 1, BLOCK 36 AREA LAND MALIR KARACHI
      </p>

      {/* Vehicles Information */}
      <h2>Vehicles Information</h2>
      <p>
        <strong>Chasis No:</strong> CL049WLJ-400453<br />
        <strong>Engine No:</strong> 4D56-CU4106<br />
        <strong>Model:</strong> 1990<br />
        <strong>Make:</strong> JEEP<br />
        <strong>Car No:</strong> BC-0518<br />
        <strong>Colour:</strong> NOT DEFINED
      </p>

      {/* Copyright */}
      <p>
        @2023 Ministry of Interior Pakistan<br />
        Phone No: 051-9206660<br />
        Fax No: 051-9204193<br />
        Email ID: dslaw2@interior.gov.pk
      </p>
    </div>
  );
}

export default HomePage;
