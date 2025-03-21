import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
} from 'react-bootstrap';
import { Editorformats, Editormodules } from '../Data';

const TextEditor = ({ blogForm, setBlogFrom, sumbit }) => {
  const handleblogForm = (e) => {
    const { value, name } = e.target;
    setBlogFrom({ ...blogForm, [name]: value });
  };
  console.log('blogForm', blogForm);
  const handlemoreFAQ = () => {
    setBlogFrom({
      ...blogForm,
      faqs: [...blogForm.faqs, { ques: '', ans: '' }],
    });
  };

  const handledeleteFAQ = (index) => {
    let Faq = [...blogForm.faqs];
    Faq.splice(index, 1);
    setBlogFrom({
      ...blogForm,
      faqs: Faq,
    });
  };

  const handlefaqs = (value, name, index) => {
    let faqsArray = [...blogForm.faqs];
    faqsArray[index][name] = value;
    setBlogFrom({
      ...blogForm,
      faqs: faqsArray,
    });
  };

  return (
    <Container>
      <Form onSubmit={sumbit}>
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
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  id="category"
                  onChange={handleblogForm}
                >
                  <option>select menu</option>
                  <option value="travel">travel</option>
                  <option value="food">food</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="active"
                  id="active"
                  onChange={handleblogForm}
                >
                  <option>select menu</option>
                  <option value="true">Active</option>
                  <option value="false">inActive</option>
                </Form.Select>
              </Col>
            </Row>{' '}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control placeholder="Image" type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <ReactQuill
              value={blogForm.content}
              onChange={(value) => setBlogFrom({ ...blogForm, content: value })}
              formats={Editorformats}
              modules={Editormodules}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                placeholder="Author Name"
                name="authorName"
                type="text"
                value={blogForm.authorName}
                onChange={handleblogForm}
              />
            </Form.Group>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="About Author">
              <Form.Control
                as="textarea"
                placeholder="About Author comment"
                style={{ height: '100px' }}
                value={blogForm.authorDescription}
                onChange={handleblogForm}
              />
            </FloatingLabel>
          </Col>
        </Row>
        {blogForm.faqs.map((faqitem, i) => (
          <Row className="mb-3" key={i}>
            <Col>
              <Form.Group>
                <Form.Label>FAQS Question</Form.Label>
                <Form.Control
                  placeholder="FAQS Question"
                  name="faqs"
                  type="text"
                  value={faqitem.ques}
                  onChange={(e) => handlefaqs(e.target.value, 'ques', i)}
                />
              </Form.Group>
            </Col>

            <Col>
              <ReactQuill
                value={faqitem.ans}
                onChange={(e) => handlefaqs(e.target.value, 'ans', i)}
              />
            </Col>
            {blogForm.faqs.length > 1 && (
              <Col xs lg="1">
                <Button
                  onClick={() => handledeleteFAQ(i)}
                  className="bg-danger border-danger"
                >
                  Delete
                </Button>
              </Col>
            )}
          </Row>
        ))}
        <Row className="float-end">
          <Button onClick={handlemoreFAQ}>Add FAQ</Button>
        </Row>
        <Button type="sumbit">Sumbit</Button>
      </Form>
    </Container>
  );
};

export default TextEditor;
