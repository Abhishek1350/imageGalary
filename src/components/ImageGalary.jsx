import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from "../components/Nav"
import Modal from 'react-bootstrap/Modal';

const ImageGalary = ({ API_KEY }) => {
    const [show, setShow] = useState(false);
    const [imagesData, setImagesData] = useState(null)
    const [imageData, setImageData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=programmer&image_type=photo`)
            const data = await res.json()
            setImagesData(data.hits)
        }
        fetchData();
    },[])

    // Function for showing modal
    const showBigImage = (e) => {
        setImageData(imagesData.filter((image) => {
            return e.id === image.id
        }))
        setShow(true)
    }

    const fetchSearchedData = async (query) => {
        const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`)
        const data = await res.json()
        setImagesData(data.hits)
    }


    if (!imagesData || imagesData.length === 0) {
        return (
            <Container className="py-3">
                <h2 className="text-center text-secondary fs-2 fw-bold">Loading... Please Wait</h2>
                <h3 className="text-center text-secondary fs-4 fw-bold">Or You Have Entered Wrong Input In Search</h3>
                <p className="text-center text-secondary fs-4 fw-bold">Try To Refresh</p>
            </Container>
        )
    }

    return (
        <>
            <Nav fetchSearchedData={fetchSearchedData} />
            <Container fluid  style={{ backgroundColor: "ghostwhite" }}>
                <h2 className="text-primary text-center fw-bold fs-1 py-3 mb-3">Images</h2>

                {/* Image Galary */}
                <Container className='d-flex flex-wrap justify-content-center gap-4 image-galary pb-5'>
                    {
                        imagesData.map((image) => {
                            return <img src={image.largeImageURL} key={image.id} onClick={() => showBigImage(image)} alt={image.tag} />
                        })
                    }
                </Container>

                {/* Modal Box Conatainer */}
                <Container>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-100w"
                        aria-labelledby="example-custom-modal-styling-title"
                        fullscreen={true}
                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={!imageData ? "" : imageData[0].largeImageURL} style={{ width: "90%", margin: "auto", display: "block" }} alt={!imageData ? "" : imageData[0].tags} />
                        </Modal.Body>
                    </Modal>
                </Container>
            </Container>
        </>
    )
}

export default ImageGalary
