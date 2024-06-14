import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";


const AddBook = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    //const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        title: "",
        author: "",
        description: "",
        gener: "",
        isbn: "",
        publishedOn: "",
        copies: "",
    };
    const checkoutSchema = yup.object().shape({
        title: yup.string().required("Required"),
        author: yup.string().required("Required"),
        description: yup.string().email("Fill This Area").required("Required"),
        gener: yup.string().required("Required"),
        isbn: yup.string().matches("Isbn is not valid!").required("Required"),
        publishedOn: yup.string().required("Required"),
        copies: yup.string().required("Required"),
    })

    return (
        <Box m="20px">
          <Header title="Add Book" subtitle="Fill Book Details" />
    
          <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                    
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Author"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.author}
                    name="author"
                    
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Gener"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gener}
                    name="gener"
                    
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="ISBN"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.isbn}
                    name="isbn"
                    
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    label=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.publishedOn}
                    name="publishedOn"
                    sx={{ gridColumn: "span 2" }}
                  />
                   <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Copies"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.copies}
                    name="copies"
                    
                    sx={{ gridColumn: "span 2" }}
                  />

              
                </Box>
                <Box display="flex" justifyContent="center" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Add Book
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      );
}

export default AddBook;
