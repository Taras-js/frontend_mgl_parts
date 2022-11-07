import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';



function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Search({products}) {
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState('');

    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    console.log('products:', products)
    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            // await sleep(1e3); // For demo purposes.

            if (active) {
                setOptions([...products]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    function onOption (e) {
        console.log('change+++:',e.target.value)
        // setValue(e.target.value)
    }
    function onOptionClick (e) {
        console.log('click+++:',e.target.value)
        // setValue(e.target.value)

    }
    return (
        <>
        <Autocomplete
            className='autocomplete__search'
            id="asynchronous-demo"
            sx={{ width: 350}}
            // value={value}
            type={'tel'}
            open={open}
            onChange={(e) => onOption(e)}
            onClick={(e) => onOptionClick(e)}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) =>
            {

                return option.code === value.code

            }




            }
            getOptionLabel={(option) => {


                return option.code  +  '                            '+ option.brand
            }


                }
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={(e) => onOption(e)}
                    onClick={(e) => onOptionClick(e)}
                    type={'tel'}
                    label="Поиск по артикулу"
                    InputProps={{

                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment
                            >

                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
<table>
            <tr className={'wrapper__header'}>
                <th>Бренд</th>
                <th>Артикул</th>
                <th>Клиент</th>
            </tr>
</table>
            {products && products.map(i =>

                <tr className={'wrapper'}>
                    <td>{i.brand}</td>
                    <td>{i.code}</td>
                    <td>{i.client}</td>
                </tr>

            )
            }
        </>



    );
}