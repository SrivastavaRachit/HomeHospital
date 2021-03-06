import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import app_config from "../../config";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { Switch } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddEquipment() {
  const userForm = {
    title: "",
    description: "",
    price: "",
    rentable: false,
    thumbnail: "",
    tags: "",
  };

  const [thumbnail, setThumbnail] = React.useState("");

  const url = app_config.api_url;
  const addequipmentSubmit = (formdata) => {
    formdata.thumbnail = thumbnail;
    fetch(url + "/equipment/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Added Successfully",
        });
      });
  };

  const uploadThumbnail = (e) => {
    console.log("file selected");

    let file = e.target.files[0];
    console.log(file.name);
    setThumbnail(file.name);
    let form = new FormData();
    form.append("myfile", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: form }).then(
      (res) => {
        console.log(res.status);
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Equipment
          </Typography>
          <Formik initialValues={userForm} onSubmit={addequipmentSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="title"
                      value={values.username}
                      onChange={handleChange}
                      label="title"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="description"
                      label="description"
                      value={values.email}
                      onChange={handleChange}
                      autoComplete="description"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="price"
                      label="price"
                      value={values.price}
                      onChange={handleChange}
                      //   type="password"
                      autoComplete="new-price"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      id="tags"
                      label="tags"
                      value={values.email}
                      onChange={handleChange}
                      autoComplete="tags"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="category"
                      label="category"
                      value={values.category}
                      onChange={handleChange}
                      autoComplete="category"
                    />
                    </Grid>

                  {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
                  <Grid item xs={12} sm={12}>
                    <label>Upload Thumbnail</label>
                    <input
                      type="file"
                      onChange={uploadThumbnail}
                      className="form-control"
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Switch
                      id="rentable"
                      value={values.email}
                      onChange={handleChange}
                      label="Equipment is Rentable"
                    ></Switch>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Equipment Added
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    {/* <Link href="#" variant="body2">
              Already have an account? Sign in  
            </Link> */}
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
