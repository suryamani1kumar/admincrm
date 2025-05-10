import React, { useState } from 'react';
import TextEditor from '../../component/textEditor/TextEditor';
import { axiosInstance } from '../../utils/axiosInstance';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import { Grid, TextareaAutosize, TextField } from "@mui/material";

const AddBlog = () => {
  const [blogForm, setBlogFrom] = useState({
    content: '',
    smallDescription: '',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: '',
    category: '',
    active: '',
    faqs: [{ ques: '', ans: '' }],
    authorName: '',
    authorDescription: '',
  });
   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const sumbitBlog = (e) => {
    e.preventDefault();
    axiosInstance
      .post('/api/addBlog', { ...blogForm, userid: '3123sas2@fsfs' })
      .then((res) => console.log(res))
      .catch((err) => console.log('error', err));
  };
  return (
    <> 
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Category
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "5px",
          }}
        >
          <p> Modal title</p>{" "}
          <p>
            <IoMdClose onClick={handleClose} />
          </p>
        </div>
        <Grid container spacing={2} margin={2}>
          <Grid size={{ sm: 12, md: 6 }}>
            <TextField
              id="outlined-basic"
              label="category name*"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <TextField
              id="outlined-basic"
              label="category url*"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 12 }}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Category Descrption"
              style={{
                width: "100%",
                border: "1px solid #c4c4c4",
                borderRadius: "5px",
              }}
            />
          </Grid>
        </Grid>

        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </Dialog>
      <TextEditor
      blogForm={blogForm}
      setBlogFrom={setBlogFrom}
      sumbit={sumbitBlog}
    />
    </>
    
  );
};

export default AddBlog;
