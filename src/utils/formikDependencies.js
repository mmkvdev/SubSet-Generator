import * as Yup from 'yup';

export const initialValues = {
    description: ''
};

export const validationSchema = Yup.object({
    description: Yup.string()
        .required(' Required ... 😕 ')
        .max(8, 'Only 8 characters allowed...')
});

export const subStringGenerator = (string) => {
    let slicer = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            if (string.slice(i, j).length) {
                if (!slicer.includes(string.slice(i, j))) {
                    slicer.push(string.slice(i, j));
                }
            }
        }
    }
    // console.log(JSON.stringify(slicer));
    return slicer.sort((a, b) => a.length - b.length);
};
