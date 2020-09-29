import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
// import InvoiceTitle from './InvoiceTitle'
// import BillTo from './BillTo'
// import InvoiceNo from './InvoiceNo'
// import InvoiceItemsTable from './InvoiceItemsTable'
// import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import logo from '../static/images/logo.png'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
});
  
type props = {
    jobSerialNo?: string; 
};

export default function Invoice (props: any) {
    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.titleContainer}>
                    <Text style={styles.reportTitle}>Receipt</Text>
                </View>
                <View style={styles.invoiceNoContainer}>
                    <Text style={styles.label}>Job Serial No:</Text>
                    <Text style={styles.invoiceDate}>{props.jobSerialNo}</Text>
                </View >
                <View style={styles.invoiceDateContainer}>
                    <Text style={styles.label}>Date: </Text>
                    <Text ></Text>
                </View >
                
                {/* <Image style={styles.logo} src={logo}
                <InvoiceTitle title='Invoice'/>
                <InvoiceNo invoice={invoice}/>
                <BillTo invoice={invoice}/>
                <InvoiceItemsTable invoice={invoice} />
                <InvoiceThankYouMsg /> */}
            </Page>
        </Document>
    );
}