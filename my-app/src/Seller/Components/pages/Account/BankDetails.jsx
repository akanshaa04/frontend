import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';

const BankDetails = () => {
    const formik = useFormik({
        initialValues: {
            accountNumber: "",
            ifscCode: "",
            accountHolderName: "",
        },
        onSubmit: (values) => {
            console.log(values, "formik submitted");
        }
    });

    return (
        <div className="space-y-5">
            <TextField
                fullWidth
                name="accountNumber"
                label="Account Number"
                value={formik.values.accountNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
                helperText={formik.touched.accountNumber && formik.errors.accountNumber}
            />
            <TextField
                fullWidth
                name="ifscCode"
                label="IFSC Code"
                value={formik.values.ifscCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
                helperText={formik.touched.ifscCode && formik.errors.ifscCode}
            />
            <TextField
                fullWidth
                name="accountHolderName"
                label="Account Holder Name"
                value={formik.values.accountHolderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.accountHolderName && Boolean(formik.errors.accountHolderName)}
                helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
            />
            <Button fullWidth variant="contained" onClick={formik.handleSubmit}>
                Submit
            </Button>
        </div>
    );
};

export default BankDetails;
