import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  sections: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    width: "50%",
  },
  section__text: {
    fontSize: 10,
    marginTop: 10,
    paddingBottom: 3,
    borderBottom: 1,
  },
  signatures: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  signature: {
    width: 200,
    height: 100,
    borderBottom: 2,
  },
  renter: {
    width: 100,
    height: 100,
  },
});

export default function Template({ booking, signature }) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.sections}>
          <View style={styles.section}>
            <Text style={styles.section__text}>Name: {booking?.name}</Text>
            <Text style={styles.section__text}>Surname: {booking?.surname}</Text>
            <Text style={styles.section__text}>Email: {booking?.email}</Text>
            <Text style={styles.section__text}>Passport: {booking?.passport}</Text>
            <Text style={styles.section__text}>Price: {booking?.price}</Text>
            <Text style={styles.section__text}>Support for Phone:</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.section__text}>Rental Date:</Text>
            <Text style={styles.section__text}>Price:</Text>
            <Text style={styles.section__text}>Insurance:</Text>
            <Text style={styles.section__text}>No. Scooter:</Text>
            <Text style={styles.section__text}>Total Price:</Text>
            <Text style={styles.section__text}>Helmet:</Text>
          </View>
        </View>
        <View style={styles.signatures}>
          <View style={styles.signature}>
            <Text>The Owner</Text>
          </View>
          <View style={styles.signature}>
            <Text>The Renter</Text>
            {signature && <Image style={styles.renter} src={signature} />}
          </View>
        </View>
      </Page>
    </Document>
  );
}
