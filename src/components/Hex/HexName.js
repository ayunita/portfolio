import React from 'react';
import styles from './Hex.module.scss';

const HexName = (props) => {
    const Hex = ({children}) => (
        <div className={styles.Hex}>
            <div className={styles.Text}>{children}</div>
        </div>
    );

    const HexContainer = ({children, style}) => (
        <div className={styles.Container} style={style}>{children}</div>
    );
    // const name = ['YUNITA', 'SOFTWARE', 'DEVELOPER'];

    // let hexName = name.map(line => {
    //     return <HexContainer key={line}>
    //         {
    //             [...line].forEach((char, index) => {
    //                 return <Hex key={`${char}_${index}`}>{char}</Hex>
    //             })
    //         }
    //     </HexContainer>
    // })

    return (
        <div className={styles.Wrapper}>
            <HexContainer>
                <Hex>Y</Hex>
                <Hex>U</Hex>
                <Hex>N</Hex>
                <Hex>I</Hex>
                <Hex>T</Hex>
                <Hex>A</Hex>
            </HexContainer>
            <HexContainer>
                <Hex>S</Hex>
                <Hex>O</Hex>
                <Hex>F</Hex>
                <Hex>T</Hex>
                <Hex>D</Hex>
                <Hex>E</Hex>
                <Hex>V</Hex>
            </HexContainer>
            <HexContainer>
                <Hex><small>Learn</small></Hex>
                <Hex><small>Code</small></Hex>
                <Hex><small>Fun</small></Hex>
                <Hex><small>Repeat</small></Hex>
            </HexContainer>
        </div>
    )
}

export default HexName;