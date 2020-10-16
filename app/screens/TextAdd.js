<View key={key}>
  <View style={styles.newFieldContainer}>
    <View style={styles.textInput}>
      <AppFormField
        name="value"
        autoCapitalize="words"
        placeholder="Enter Field"
        style={[
          styles.value,
          { backgroundColor: theme.card, color: theme.color },
        ]}
      />
      <AppFormField
        name="value"
        autoCapitalize="words"
        placeholder="Enter Value"
        style={[
          styles.value,
          { backgroundColor: theme.card, color: theme.color },
        ]}
      />
    </View>
    <TouchableOpacity
      style={[
        styles.closeButton,
        {
          backgroundColor: theme.card,
          borderColor: theme.cardShadow,
        },
      ]}
      onPress={() => handleDeleteNewField(key)}
    >
      <MaterialCommunityIcons name="close" size={15} color={colors.add} />
    </TouchableOpacity>
  </View>
  <ListSeparator />
</View>;
