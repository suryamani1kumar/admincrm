import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const Editorformats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
  'background',
];

const Editormodules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const TextEditor = () => {
 const [blogForm, setBlogFrom] = useState({
    content: "",
    metaTitle: "",
    metaDescription: "",
    metaKeyword: "",
    pageUrl: "",
    heading: "",
    category: "",
    status: "",
  });
  const handleblogForm = (e) => {
    const { value, name } = e.target;
    setBlogFrom({ ...blogForm, [name]: value });
  };
  return (
   <Container>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Meta Title</Form.Label>
                <Form.Control
                  placeholder="meta title"
                  name="metaTitle"
                  type="text"
                  value={blogForm.metaTitle}
                  onChange={handleblogForm}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Meta Keyword</Form.Label>
                <Form.Control
                  placeholder="meta keyword"
                  name="metaKeyword"
                  type="text"
                  value={blogForm.metaKeyword}
                  onChange={handleblogForm}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Meta Description</Form.Label>
                <Form.Control
                  placeholder="meta description"
                  name="metaDescription"
                  type="text"
                  value={blogForm.metaDescription}
                  onChange={handleblogForm}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  placeholder="Heading"
                  name="heading"
                  type="text"
                  value={blogForm.heading}
                  onChange={handleblogForm}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>PageUrl</Form.Label>
                <Form.Control
                  placeholder="pageUrl"
                  name="pageUrl"
                  type="text"
                  value={blogForm.pageUrl}
                  onChange={handleblogForm}
                />
              </Form.Group>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control placeholder="Image" type="file" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    id="category"
                    onChange={handleblogForm}
                  >
                    <option>Open this select menu</option>
                    <option value="travel">travel</option>
                    <option value="food">food</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    id="status"
                    onChange={handleblogForm}
                  >
                    <option>Open this select menu</option>
                    <option value="Active">Active</option>
                    <option value="inActive">inActive</option>
                  </Form.Select>
                </Col>
              </Row>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <ReactQuill
                value={blogForm.content}
                onChange={(value) =>
                  setBlogFrom({ ...blogForm, content: value })
                }
                style={{ height: "300px" }}
                // formats={formats}
                // modules={modules }
              />
            </Col>
          </Row>{" "}
        </Form>
      </Container>
  );
};

export default TextEditor;
