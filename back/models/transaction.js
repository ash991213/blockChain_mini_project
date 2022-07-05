module.exports = (sequelize, DataTypes) => {
	const Transaction = sequelize.define(
		'Transaction',
		{
			blockHash: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			blockNumber: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			contractAddress: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: null,
			},
			cumulativeGasUsed: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			effectiveGasPrice: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			from: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			gasUsed: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			// logs: {
			// 	type: DataTypes.STRING(64),
			// 	allowNull: false,
			// },
			// logsBloom: {
			// 	type: DataTypes.STRING(64),
			// 	allowNull: false,
			// },
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			to: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			transactionHash: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			transactionIndex: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING(16),
				allowNull: false,
			},
		},

		{
			sequelize,
			timestamps: false,
			paranoid: false,
			tableName: 'Transaction',
			charset: 'utf8mb4',
			collate: 'utf8mb4_general_ci',
		},
	);

	Transaction.associate = (db) => {
		db.Transaction.belongsTo(db.Block, { foreignKey: 'blockNumber', sourceKey: 'number', onDelete: 'cascade', onUpdate: 'cascade' });
	};

	return Transaction;
};
