// FileDetailsModal.jsx
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const FileDetailsModal = ({ showModal, handleModalClose }) => {
    return (
        <Modal isOpen={showModal} toggle={handleModalClose} size="lg">
            <ModalHeader toggle={handleModalClose} className='border-0'>File Details</ModalHeader>
            <ModalBody>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="relative w-full max-w-4xl bg-white p-6 rounded shadow-lg p-3">
         
            <h4 className="font-semibo d-flex justify-content-end">Baderom Pluss AS</h4>
            <hr/>
            <div className='d-flex justify-content-end text-black w-100  text-end'> 
               
            <span>Leiv Eiriksons gate 1, 0271 Oslo,Norge<br/>
             Mobil: 90 99 70 90/h6<br/>
             E-postadresse: jakob@Baderom.no<br/>
             Foretaksregisteret: No 919 833 300 MVA<br/>
              www.baderom.no
            </span>
            </div>
       
        

          {/* Modal content */}
          <div className="mt-4">
            <div>
              <h4 className="text-xl font-bold text-black">FAKTURA</h4>
            </div>
            <div className="text-sm leading-relaxed">
              <p>
                <strong>Fakturanr:</strong> 100019<br />
                <strong>Fakturadato:</strong> 2022-06-29<br />
                <strong>Kundenr:</strong> 10005
              </p>
              <hr className="my-4" />
              <div>
                <p><strong>Betalingsinformasjon:</strong></p>
                <p>Forfallsdato: 2022-07-04</p>
                <p>Kontonummer: 1506.74.97756</p>
              </div>

              <table className="w-full mt-4 text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Beskrivelse</th>
                    <th className="py-2">Antall</th>
                    <th className="py-2">Enhetspris</th>
                    <th className="py-2">Beløp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Tillegg. Betegninsplate</td>
                    <td className="py-2">1</td>
                    <td className="py-2">1,193.40</td>
                    <td className="py-2">1,491.75</td>
                  </tr>
                  <tr>
                    <td className="py-2">Tillegg. Frakt</td>
                    <td className="py-2">1</td>
                    <td className="py-2">80.00</td>
                    <td className="py-2">100.00</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2">Sum</td>
                    <td></td>
                    <td>1,273.40</td>
                    <td>1,591.75</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="flex justify-end mt-6">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Accept
            </button>
          </div> */}
        </div>
      </div>
            </ModalBody>
            
        </Modal>
    );
};

export default FileDetailsModal;
