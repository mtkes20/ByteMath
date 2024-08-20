import {useTranslation} from "react-i18next";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const BinaryTable: React.FC<{ operation: 'addition' | 'subtraction' | 'multiplication' }> = ({ operation }) => {
    const { t } = useTranslation();
    const data = t(`binarySystem.binaryArithmetic.${operation}.table`, { returnObjects: true }) as string[];

    return (
        <TableContainer component={Paper} style={{ marginBottom: '20px', backgroundColor: '#2a2a2a' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((key) => (
                            <TableCell key={key} style={{ color: 'white', fontWeight: 'bold' }}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {Object.values(row).map((value, cellIndex) => (
                                <TableCell key={cellIndex} style={{ color: 'white' }}>{value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BinaryTable;