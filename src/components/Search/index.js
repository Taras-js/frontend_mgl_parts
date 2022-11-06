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

const dataDefault = [
    {
        id: 2,
        brand: 'Elring',
        code: '124474',
        deviation: 42,
        client: 2055,
        countAll: 42
    },
    {
        id: 3,
        brand: 'Elring',
        code: '188680',
        deviation: 1,
        client: 2055,
        countAll: 1
    },
    {
        id: 4,
        brand: 'Elring',
        code: '003310',
        deviation: 45,
        client: 2077,
        countAll: 45
    },
    {
        id: 5,
        brand: 'Elring',
        code: '006051',
        deviation: 2,
        client: 2077,
        countAll: 2
    },
    {
        id: 6,
        brand: 'Elring',
        code: '006580',
        deviation: 56,
        client: 2077,
        countAll: 56
    },
    {
        id: 7,
        brand: 'Elring',
        code: '007041',
        deviation: 8,
        client: 2077,
        countAll: 8
    },
    {
        id: 8,
        brand: 'Elring',
        code: '010051',
        deviation: 101,
        client: 2077,
        countAll: 101
    },
    {
        id: 9,
        brand: 'Elring',
        code: '012001',
        deviation: 75,
        client: 2077,
        countAll: 75
    },
    {
        id: 10,
        brand: 'Elring',
        code: '012160',
        deviation: 4,
        client: 2077,
        countAll: 4
    },
    {
        id: 11,
        brand: 'Elring',
        code: '012507',
        deviation: 2,
        client: 2077,
        countAll: 2
    },
    {
        id: 12,
        brand: 'BOSCH',
        code: '0130821993',
        deviation: 14,
        client: 2077,
        countAll: 14
    },
    {
        id: 13,
        brand: 'Elring',
        code: '016460',
        deviation: 37,
        client: 2077,
        countAll: 37
    },
    {
        id: 14,
        brand: 'Elring',
        code: '016700',
        deviation: 4,
        client: 2077,
        countAll: 4
    },
    {
        id: 15,
        brand: 'Elring',
        code: '016920',
        deviation: 25,
        client: 2077,
        countAll: 25
    },
    {
        id: 16,
        brand: 'Elring',
        code: '023200',
        deviation: 88,
        client: 2077,
        countAll: 88
    },
    {
        id: 17,
        brand: 'Elring',
        code: '023631',
        deviation: 47,
        client: 2077,
        countAll: 47
    },
    {
        id: 18,
        brand: 'Elring',
        code: '023862',
        deviation: 1,
        client: 2077,
        countAll: 1
    },
    {
        id: 19,
        brand: 'BOSCH',
        code: '0242135557',
        deviation: 20,
        client: 2077,
        countAll: 20
    },
    {
        id: 20,
        brand: 'Elring',
        code: '025260',
        deviation: 4,
        client: 2077,
        countAll: 4
    },
    {
        id: 21,
        brand: 'Elring',
        code: '026540',
        deviation: 3,
        client: 2077,
        countAll: 3
    },
    {
        id: 22,
        brand: 'Elring',
        code: '026740',
        deviation: 2,
        client: 2077,
        countAll: 2
    },
    {
        id: 23,
        brand: 'Elring',
        code: '026790',
        deviation: 3,
        client: 2077,
        countAll: 3
    },
    {
        id: 24,
        brand: 'Elring',
        code: '026812',
        deviation: 23,
        client: 2077,
        countAll: 23
    },
    {
        id: 25,
        brand: 'Elring',
        code: '026821',
        deviation: 3,
        client: 2077,
        countAll: 3
    },
    {
        id: 26,
        brand: 'Elring',
        code: '027170',
        deviation: 12,
        client: 2077,
        countAll: 12
    },
    {
        id: 27,
        brand: 'Elring',
        code: '027200',
        deviation: 17,
        client: 2077,
        countAll: 17
    },
    {
        id: 28,
        brand: 'Elring',
        code: '027330',
        deviation: 4,
        client: 2077,
        countAll: 4
    },
    {
        id: 29,
        brand: 'BOSCH',
        code: '0281006009',
        deviation: 10,
        client: 2055,
        countAll: 10
    },
    {
        id: 30,
        brand: 'Elring',
        code: '028230',
        deviation: 11,
        client: 2077,
        countAll: 11
    },
    {
        id: 31,
        brand: 'Elring',
        code: '030671',
        deviation: 93,
        client: 2077,
        countAll: 93
    },
    {
        id: 32,
        brand: 'Elring',
        code: '034500',
        deviation: 2,
        client: 2077,
        countAll: 2
    },
    {
        id: 33,
        brand: 'Elring',
        code: '038164',
        deviation: 3,
        client: 2077,
        countAll: 3
    },
    {
        id: 34,
        brand: 'Bosch',
        code: '0432193419',
        deviation: 3,
        client: 2045,
        countAll: 3
    },
    {
        id: 35,
        brand: 'Elring',
        code: '043605',
        deviation: 5,
        client: 2077,
        countAll: 5
    },
    {
        id: 36,
        brand: 'Elring',
        code: '044590',
        deviation: 3,
        client: 2077,
        countAll: 3
    },
    {
        id: 37,
        brand: 'BOSCH',
        code: '0450906508',
        deviation: 10,
        client: 2055,
        countAll: 10
    },
    {
        id: 38,
        brand: 'Elring',
        code: '049557',
        deviation: 57,
        client: 2077,
        countAll: 57
    },
    {
        id: 39,
        brand: 'Elring',
        code: '050550',
        deviation: 1,
        client: 2077,
        countAll: 1
    },
    {
        id: 40,
        brand: 'Elring',
        code: '052060',
        deviation: 4,
        client: 2077,
        countAll: 4
    },
    {
        id: 41,
        brand: 'Elring',
        code: '056900',
        deviation: 20,
        client: 2077,
        countAll: 26
    },
    {
        id: 42,
        brand: 'Elring',
        code: '059341',
        deviation: 3,
        client: 2077,
        countAll: 3
    },
    {
        id: 43,
        brand: 'Elring',
        code: '066391',
        deviation: 47,
        client: 2077,
        countAll: 47
    },
    {
        id: 44,
        brand: 'Elring',
        code: '066670',
        deviation: 2,
        client: 2077,
        countAll: 2
    },
    {
        id: 45,
        brand: 'Elring',
        code: '073890',
        deviation: 305,
        client: 2077,
        countAll: 305
    },
    {
        id: 46,
        brand: 'Elring',
        code: '074990',
        deviation: 38,
        client: 2077,
        countAll: 38
    },
    {
        id: 47,
        brand: 'Elring',
        code: '076220',
        deviation: 5,
        client: 2077,
        countAll: 5
    },
    {
        id: 48,
        brand: 'Elring',
        code: '076892',
        deviation: 30,
        client: 2077,
        countAll: 30
    },
    {
        id: 49,
        brand: 'Elring',
        code: '080900',
        deviation: 32,
        client: 2077,
        countAll: 32
    },
    {
        id: 50,
        brand: 'Elring',
        code: '095311',
        deviation: 1,
        client: 2077,
        countAll: 1
    }
]
