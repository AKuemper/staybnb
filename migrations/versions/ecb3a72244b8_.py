"""empty message

Revision ID: ecb3a72244b8
Revises: 
Create Date: 2021-07-29 19:02:51.338256

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ecb3a72244b8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('img_url', sa.VARCHAR(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('listings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('type', sa.VARCHAR(), nullable=False),
    sa.Column('space', sa.VARCHAR(), nullable=False),
    sa.Column('title', sa.VARCHAR(), nullable=False),
    sa.Column('description', sa.VARCHAR(), nullable=False),
    sa.Column('country', sa.VARCHAR(), nullable=False),
    sa.Column('city', sa.VARCHAR(), nullable=False),
    sa.Column('state', sa.VARCHAR(), nullable=False),
    sa.Column('address', sa.VARCHAR(), nullable=False),
    sa.Column('latitude', sa.Float(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=True),
    sa.Column('price_per_night', sa.Integer(), nullable=False),
    sa.Column('cleaning_fee', sa.Integer(), nullable=False),
    sa.Column('check_in_time', sa.VARCHAR(), nullable=False),
    sa.Column('check_in_type', sa.VARCHAR(), nullable=False),
    sa.Column('wifi', sa.Integer(), nullable=False),
    sa.Column('air_conditioning', sa.Integer(), nullable=False),
    sa.Column('heat', sa.Integer(), nullable=False),
    sa.Column('parking', sa.VARCHAR(), nullable=False),
    sa.Column('bedrooms', sa.Integer(), nullable=False),
    sa.Column('beds', sa.Integer(), nullable=False),
    sa.Column('bathrooms', sa.Float(), nullable=False),
    sa.Column('sleeps', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('address')
    )
    op.create_table('bookings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('listing_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('number_of_guests', sa.Integer(), nullable=False),
    sa.Column('check_in_date', sa.VARCHAR(), nullable=False),
    sa.Column('check_out_date', sa.VARCHAR(), nullable=False),
    sa.ForeignKeyConstraint(['listing_id'], ['listings.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('listing_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('listing_id', sa.Integer(), nullable=True),
    sa.Column('img_url', sa.VARCHAR(), nullable=False),
    sa.ForeignKeyConstraint(['listing_id'], ['listings.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('listing_id', sa.Integer(), nullable=True),
    sa.Column('review_content', sa.VARCHAR(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['listing_id'], ['listings.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('listing_images')
    op.drop_table('bookings')
    op.drop_table('listings')
    op.drop_table('users')
    # ### end Alembic commands ###