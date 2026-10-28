function criarServiço(Repository, { required = [], ownerFind = null,
    sanitize = (value) => value }) {
    return {
        async listar(user) {
            const items = await Repository.findAll();
            return ownerFind && user.role !== 'admin'
                ? items.filter((item) => item[ownerFind] === user.id)
                : items;
        }
    }
}

export default criarServiço;