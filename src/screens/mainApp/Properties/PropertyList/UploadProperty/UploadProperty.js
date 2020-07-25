import React from 'react'
import styles from './UploadProperty.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddProperty() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <span style={{ color: '#43425d' }}>
                    Property List /
                </span>
                <span style={{ color: '#bbbbbb' }}>
                    Upload Property
                </span>
            </div>
            <div className={styles.formDiv}>
                <form noValidate autoComplete="off">
                    <FormControl variant="outlined" className={classes.formControl} style={{ width: '50%' }}>
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl} style={{ width: '50%' }}>
                        <InputLabel id="demo-simple-select-outlined-label">Sub category</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Sub Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="outlined"
                        color="default"
                        endIcon={<GetAppOutlinedIcon style={{ color: '#3b86ff' }} />}
                        style={{ marginLeft: '2%', borderColor: '#3b86ff' }}
                    >
                        <span style={{ color: '#3b86ff' }}>Download Template</span>
                    </Button>
                    <div className={styles.uploadDiv}>
                        <span>Drag and drop a file here</span>
                        <span>or</span>
                        <div>
                            <input
                                accept="image/*"
                                className={classes.input}
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" style={{backgroundColor:'#3b86ff',color:'white',textTransform:'none'}}>
                                    Choose file
                                </Button>
                            </label>
                        </div>
                    </div>
                </form>
                <div className={styles.buttonDiv}>
                    <div className={styles.buttons}>
                        <Button variant="contained" style={{ backgroundColor: '#43425d', color: 'white', textTransform: 'none' }} >
                            Cancel
                    </Button>
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="contained" style={{ backgroundColor: '#f2134f', color: 'white', textTransform: 'none' }}>
                            Submit
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
