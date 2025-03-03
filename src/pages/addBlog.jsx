import TextEditor from '../component/textEditor/TextEditor';

const AddBlog = () => {
  return (
    <div>
      <TextEditor />
      <div className="author-card">
      <h4 className="author-title">AUTHOR</h4>
      <div className="author-image">
        <img src="https://www.dummyimage.com/300" alt="Author Image" />
      </div>
      <h3 className="author-name">
        HI THERE, I'M <span className="highlight">KATHY</span>
      </h3>
      <p className="author-desc">
        This blog will provide you many tested tips and advice about traveling
        anywhere without spending a fortune
      </p>
    </div>
    <div className="blog-card">
      <div className="blog-image">
        <img src="https://www.dummyimage.com/300" alt="Pantheon in Rome" />
      </div>
      <div className="blog-content">
        <h2 className="blog-title">
          Trip to Italy: Rome <span className="emoji">🍕</span>
        </h2>
        <p className="blog-meta">
          <span className="icon">🏷️</span> POSTED IN EUROPE
          <span className="icon">👤</span> KATHY
        </p>
        <p className="blog-description">
          This post is part of a series called Travel to Italy Palatine Hill.
          Aliquam sit amet euismod purus, sed commodo ipsum. Morbi sodales
          consectetur ex vitae molestie. Morbi ultrices rhoncus...
        </p>
        <a href="#" className="read-more">CONTINUE READING</a>
      </div>
    </div>
    </div>
  );
};

export default AddBlog;
