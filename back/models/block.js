module.exports = (sequelize, DataTypes) => {
	const Block = sequelize.define(
		'Block',
		{
			difficulty: {
				type: DataTypes.STRING(64),
				allowNull: false,
			},
			extraData: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			gasLimit: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			gasUsed: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			hash: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			// logsBloom: {
			// 	type: DataTypes.STRING(128),
			// 	allowNull: false,
			// },
			miner: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			mixHash: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			nonce: {
				type: DataTypes.STRING(32),
				allowNull: false,
			},
			number: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			parentHash: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			receiptsRoot: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			sha3Uncles: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			size: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			stateRoot: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			timestamp: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			baseFeePerGas: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			// transactions: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
			transactionsRoot: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},
			// uncles: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
		},
		{
			sequelize,
			timestamps: false,
			paranoid: false,
			tableName: 'Block',
			charset: 'utf8mb4',
			collate: 'utf8mb4_general_ci',
		},
	);

	Block.associate = (db) => {
		db.Block.hasMany(db.hasMany, { foreignKey: 'blockNumber', sourceKey: 'number', onDelete: 'cascade', onUpdate: 'cascade' });
	};

	return Block;
};
