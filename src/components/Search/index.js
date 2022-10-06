import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

// interface Film {
//     title: string;
//     year: number;
// }

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Search() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {
                setOptions([...topFilms]);
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

    return (
        <>
        <Autocomplete
            id="asynchronous-demo"
            sx={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.year === value.year}
            getOptionLabel={(option) => option.year}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Поиск по артикулу"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
            {topFilms.map(i =>
                <div className={'wrapper'}>
                    <div>{i.year}</div>
                    <div>{i.title}</div>
                </div>

            )
            }
        </>



    );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [

    { title: 'Elring', year: '050550' },
    { title: 'Elring', year: '049557' },
    { title: 'Elring', year: '043605' },
    { title: 'Elring', year: '038164' },
    { title: 'Elring', year: '030671' },
    { title: 'Bosch', year: '0281006009' },
    { title: 'Bosch', year: '0432193419' },
    { title: 'Elring', year: '027170' },
    { title: 'Elring', year: '026821' },
    { title: 'Elring', year: '025260' },
    { title: 'BOSCH', year: '0242135557' },
    { title: 'BOSCH', year: '0130821993' },
    { title: 'Elring', year: '003310' },
    { title: 'Elring', year: '006051' },
    { title: 'Elring', year: '007041' },
    { title: 'Elring', year: '010051' },
    { title: 'Elring', year: '012160' },
    { title: 'Elring', year: '050550' },
    { title: 'Elring', year: '012507' },

];
