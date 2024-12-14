import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddButton(props) {
  const defaultData = { name: "", role: "", src: "" };
  const [newData, setNewData] = useState(defaultData)

  function handleChange(event) {
    const { name, value } = event.target;
    setNewData(prev => ({ ...prev, [name]: value }))
  }

  function handleSub() {
    setNewData(defaultData)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='flex justify-center items-center m-4'>
      <Button variant="primary" onClick={handleShow} >
        + Add a new employee
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={e => {
            e.preventDefault();
            props.addEmployee(newData.name, newData.role, newData.src);
            handleSub();
            handleClose();
          }}
            id="editForm" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text"
                  value={newData.name}
                  onChange={handleChange}
                  placeholder='Enter a name'
                  name='name' />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text"
                  value={newData.role}
                  onChange={handleChange}
                  placeholder='Enter a role'
                  name='role' />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="src">
                  Picture
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="src" type="text"
                  value={newData.src}
                  onChange={handleChange}
                  placeholder='https://www.picture.com'
                  name='src' />
              </div>
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button form="editForm" type="submit" className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
