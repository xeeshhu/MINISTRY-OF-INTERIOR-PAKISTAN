// pages/index.js
function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Picture with Hyperlink */}
      <a href="https://www.interior.gov.pk/" target="_blank" rel="noopener noreferrer">
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjlO-rczSyJygdhYKrEbIFg4mHx1tl_gTyQvMSf89F0XOyogdyAqd_7x1RCBEX1NrYi8aXmpOIbxqhHj_S2o4KAvnIoGMxYtUzwjF7xe7Y52ALt7tKM3bKCdfdT4QxPJ9gdH2zYiXNIHtJxEq8IyhsYjYr1GPi8SSbAPhTjg5g2to101vqYxDDyWdfs=w800" />
      </a>

      {/* Header with Hyperlink */}
      <a href="https://www.interior.gov.pk/" target="_blank" rel="noopener noreferrer">
        <p style={{ color: 'red' }}>VERIFICATION BLACK TINTED PERMIT</p>
      </a>
      <h1>MINISTRY OF INTERIOR PAKISTAN</h1>
      <p>Permission to use Tinted Glasses</p>

      {/* Picture after Title */}
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiyUBXfrWvKaiElCYkP7wa50L-5g2lfLTnsbI6uOLaqoMosoLyj5nVQdNSQ8CsFXxTVJA3LHdrwOcrpMxk-6Ugta1AFxRCAJc3TO18l447aBw_bjIeD3Z2luAhrikuPTBK_fFmsSrz8QmM84qEhhcxPhffrYj0RouxfBLKXJ39OGmOqR6SSsRgjmnFp=s320" />
      
      {/* Verified Section */}
      <div>
        <h2 style={{ textDecoration: 'underline' }}>Verified:</h2>
        <p>
          Issuing Authority: (MUHAMMAD ASAD MEHMOOD)<br />
          Section Officer (E-2)<br />
          Government of Pakistan<br />
          Allow For All Pakistan
        </p>
      </div>
    </div>
  <div>
      {/* User Information */}
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> SYED KASHIF RASHEED<br />
        <strong>Father Name:</strong> SYED RASHEED AHMED<br />
        <strong>CNIC:</strong> 42101-0999821-3<br />
        <strong>City:</strong> KARACHI<br />
        <strong>Address:</strong> Civic view apartments dhora g Bahadurabad
      </p>

      {/* Vehicles Information */}
      <h2>Vehicles Information</h2>
      <p>
        <strong>Chasis No:</strong> Y031886<br />
        <strong>Engine No:</strong> 4D56-CU4106<br />
        <strong>Model:</strong> 2010<br />
        <strong>Make:</strong> TOYOTA<br />
        <strong>Car No:</strong> ASY-838<br />
        <strong>Colour:</strong> BLACK
      </p>
      {/* Copyright */}
      <p style={{ color: 'grey' }}>Copyright</p>
      <p>
        @2023 Ministry of Interior Pakistan | Phone No: 051-9206660 | Fax No: 051-9204193 | Email ID: dslaw2@interior.gov.pk
      </p>
    </div>
  );
}

export default HomePage;
