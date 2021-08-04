"""empty message

Revision ID: 3d28e5006900
Revises: c9b82556175d
Create Date: 2021-08-02 15:41:04.505203

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3d28e5006900'
down_revision = 'c9b82556175d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('bookings', sa.Column('check_in_date', sa.VARCHAR(), nullable=False))
    op.add_column('bookings', sa.Column('check_out_date', sa.VARCHAR(), nullable=False))
    op.alter_column('bookings', 'check_in_day',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('bookings', 'check_in_month',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('bookings', 'check_in_year',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('bookings', 'check_out_day',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('bookings', 'check_out_month',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('bookings', 'check_out_year',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('bookings', 'check_out_year',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('bookings', 'check_out_month',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('bookings', 'check_out_day',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('bookings', 'check_in_year',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('bookings', 'check_in_month',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('bookings', 'check_in_day',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.drop_column('bookings', 'check_out_date')
    op.drop_column('bookings', 'check_in_date')
    # ### end Alembic commands ###