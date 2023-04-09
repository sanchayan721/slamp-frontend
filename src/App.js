import './App.scss';
import FlexCC from './Components/Placements/FlexCC';
import WithToolTip from './Components/Tooltip/WithTooltip';
import LoadingIconButton from './Components/Buttons/LoadingIconButton';
import DownloadIcon from '@mui/icons-material/Download';
import { colors } from './theme';
import ThemedField from './Components/TextFields/ThemedField';
import { Controller, useForm } from 'react-hook-form';
import ColumnFlexCC from './Components/Placements/ColumnFlexCC';
import CollapsableError from './Components/TextFields/CollapsableError';

const helperTextObject = {
    keyword: {
        required: "Can not be empty!",
    },
}

function App() {

    const {
        reset,
        control,
        register,
        handleSubmit,
        errors
    } = useForm({
        mode: "onChange",
    });

    const onSubmitHandler = ({ keyword }) => {
        if (!keyword) return;
        if (!keyword.length) return;
        console.log(keyword)
    }

    return (
        <form
            style={{ height: '100%' }}
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <FlexCC
                gap='1em'
            >
                <Controller
                    control={control}
                    name='keyword'
                    rules={{
                        required: true,
                    }}
                    render={({ field, fieldState: { error } }) => {
                        return (
                            <ColumnFlexCC position='relative' sx={{ width: 'max-content' }}>
                                <ThemedField
                                    {...field}
                                    fullWidth
                                    size='small'
                                    name='keyword'
                                    placeholder='Enter Keyword'
                                    sx={{ width: '20em' }}
                                    error={error !== undefined}
                                />
                                <CollapsableError
                                    growCondition={error !== undefined}
                                    transform='translateY(1.75em)'
                                >
                                    {
                                        error
                                            ? error?.type === 'userError'
                                                ? error?.errorMessage
                                                : helperTextObject.keyword[error?.type]
                                            : ''
                                    }
                                </CollapsableError>
                            </ColumnFlexCC>

                        )
                    }}
                />
                <WithToolTip
                    color={colors.primary}
                    textColor={colors.darker__card}
                    message={"Download"}
                    className={'noselect'}
                    tooltipPlacement="right"
                    showChangeState={false}
                    tooltipVanish={false}
                >
                    <LoadingIconButton
                        type='submit'
                        sx={{
                            backgroundColor: colors.primary,
                            border: `0.05em solid ${colors.primary}`,

                            '& .edit-attribute-icon': {
                                fill: colors.darker__card,
                            },

                            '&:hover': {
                                '& .edit-attribute-icon': {
                                    fill: colors.primary
                                }
                            }
                        }}
                    >
                        <DownloadIcon className='edit-attribute-icon' />
                    </LoadingIconButton>
                </WithToolTip>
            </FlexCC>
        </form>
    );
}

export default App;
