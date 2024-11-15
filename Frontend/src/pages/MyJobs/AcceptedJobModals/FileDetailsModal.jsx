// FileDetailsModal.jsx
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const FileDetailsModal = ({ showModal, handleModalClose }) => {
  const handleAcceptClick = () => {
    alert('Accept clicked');
  };
  const handleLeaveCommentClick = () => {
    alert('Leave a comment clicked')
  };
  return (
    <Modal isOpen={showModal} toggle={handleModalClose} size="lg" className=''>
      <ModalHeader toggle={handleModalClose} className='border-0'>File Details</ModalHeader>
      <ModalBody>
        <div>
          <div className="relative w-full max-w-4xl bg-white text-black rounded shadow-lg p-5">

            <h4 className="font-semibo d-flex justify-content-end">Baderom Pluss AS</h4>
            <hr style={{ border: "1px solid black" }} />
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-md-8 offset-md-4 d-flex flex-column align-items-md-end text-black  text-md-end'>
                  <span>
                    Leiv Eiriksons gate 1, 0271 Oslo, Norge<br />
                    Mobil: 90 99 70 90/h6<br />
                    E-postadresse: jakob@Baderom.no<br />
                    Foretaksregisteret: No 919 833 300 MVA<br />
                    www.baderom.no<br />
                  </span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <p className="mb-0">
                    <span>Huseyin Navruz</span><br />
                    <span>Venaveien 42</span><br />
                    <span>0672 Oslo</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm ">

              <div className='d-flex justify-content-end flex-wrap'>
                <h4 className="font-bold text-black mb-3" style={{ width: "100%", maxWidth: "31%" }}>FAKTURA</h4>
              </div>

              <div className='d-flex justify-content-end flex-wrap'>
                <div className='text-start me-4 mb-2' style={{ width: "100%", maxWidth: "12%" }}>
                  <span>Fakturanr:</span><br />
                  <span>Fakturadato:</span><br />
                  <span>Kundenr:</span>
                </div>
                <div className='text-end mb-2'>
                  <span>100019</span><br />
                  <span>2022-06-29</span><br />
                  <span>10005</span>
                </div>
              </div>
              <div className='d-flex justify-content-end mt-3 flex-wrap'>
                <h5 className="font-bold text-black w-md-auto "style={{ width: "100%", maxWidth: "31%" }}>Betalingsinformasjon</h5>
              </div>
              <div className='d-flex flex-wrap justify-content-end'>
                <div className='text-start me-2'>
                  <span>Forfallsdato:</span><br />
                  <span>Kontonummer:</span><br />
                </div>
                <div className='text-end'>
                  <span>2022-07-04</span><br />
                  <span>1506.74.97756</span><br />
                </div>
              </div>
              <div className='d-flex flex-wrap justify-content-between mt-4'>
                <div className='d-flex flex-row mb-3' style={{ minWidth: '250px' }}>
                  <div className='text-start me-4'>
                    <span>Ordrenummer:</span><br />
                    <span>Var kontakt:</span><br />
                    <span>Leveransedato:</span>
                  </div>
                  <div className='text-start'>
                    <span>21</span><br />
                    <span>Jakob Issa</span><br />
                    <span>2022-06-29</span>
                  </div>
                </div>

                <div className='d-flex flex-row mb-3' style={{ minWidth: '250px' }}>
                  <div className='text-start me-4'>
                    <span>Ordrenummer:</span><br />
                    <span>Var kontakt:</span><br />
                    <span>Leveransedato:</span>
                  </div>
                  <div className='text-'>
                    <span>2022-06-29</span><br />
                    <span>20002 Prosjekt 2-Huseyin Navruz</span><br />
                    <span>Venasveien 42<br />0672 Oslo, Norge</span>
                  </div>
                </div>
              </div>


              <div className="table-responsive">
                <table className="table w-100 border-collapse justify-content-between">
                  <thead>
                    <tr style={{ borderBottom: "1px solid black" }}>
                      <td className="py-2 text-start">Beskrivelse</td>
                      <td className="py-2 text-end">Antall</td>
                      <td className="py-2 text-end">Enh.pris<br />(ekskl.mva)</td>
                      <td className="py-2 text-end">Beløp<br />(ekskl.mva)</td>
                      <td className="py-2 text-end">Mva<br />(25%)</td>
                      <td className="py-2 text-end">Beløp<br />(inkl.mva)</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-2 text-start">Tillegg. Betegninsplate</td>
                      <td className="py-2 text-end">1</td>
                      <td className="py-2 text-end">1,193.40</td>
                      <td className="py-2 text-end">1,193.40</td>
                      <td className="py-2 text-end">298,35</td>
                      <td className="py-2 text-end">1,491.75</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid black" }}>
                      <td className="py-2 text-start">Tillegg. Frakt</td>
                      <td className="py-2 text-end">1</td>
                      <td className="py-2 text-end">80.00</td>
                      <td className="py-2 text-end">80.00</td>
                      <td className="py-2 text-end">20,00</td>
                      <td className="py-2 text-end">100,00</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid black" }}>
                      <td className="py-2 text-start">Sum</td>
                      <td className="py-2 text-end"></td>
                      <td className="py-2 text-end"></td>
                      <td className="py-2 text-end">1,273,40</td>
                      <td className="py-2 text-end">318,35</td>
                      <td className="py-2 text-end">1,591.75</td>
                    </tr>
                    <tr className="font-bold" style={{ borderBottom: "1px solid black" }}>
                      <td colSpan="1"className="py-2 text-start">Betales til bankkonto 1506.74.97756</td>
                      {/* <td></td>
                      <td></td>
                      <td></td>
                      <td></td> */}
                      <td colSpan="5" className="py-2 text-end">NOK 1,591,75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap mt-4 justify-content-between">
            <button
              className="px-5 py-2 text-blue rounded bg-white fs-5 mb-3 mb-md-0"
              style={{ color: "#41619A", border: "1px solid #EAEEF4" }}
              onClick={handleLeaveCommentClick}
            >
              Leave a comment
            </button>
            <button
              className="px-5 py-2 text-white rounded fs-5"
              style={{ background: "#41619A" }}
              onClick={handleAcceptClick}
            >
              Accept
            </button>
          </div>

        </div>
      </ModalBody>
    </Modal>
  );
};

export default FileDetailsModal;
